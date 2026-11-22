"""Pack PNG files into a .ico (PNG-compressed entries, supported by all modern browsers).

Usage: python scripts/brand/make_ico.py public/favicon.ico icon16.png icon32.png icon48.png
"""
import struct
import sys


def png_size(data: bytes) -> tuple[int, int]:
    if data[:8] != b"\x89PNG\r\n\x1a\n":
        raise ValueError("not a PNG")
    return struct.unpack(">II", data[16:24])


def main(out: str, pngs: list[str]) -> None:
    blobs = [open(p, "rb").read() for p in pngs]
    header = struct.pack("<HHH", 0, 1, len(blobs))
    offset = 6 + 16 * len(blobs)
    entries, body = b"", b""
    for data in blobs:
        w, h = png_size(data)
        entries += struct.pack("<BBBBHHII", w % 256, h % 256, 0, 0, 1, 32, len(data), offset)
        body += data
        offset += len(data)
    with open(out, "wb") as f:
        f.write(header + entries + body)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2:])
