import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Send, Check, AlertCircle, Loader2 } from 'lucide-react';
import Globe3D from './Globe3D';
import EarthCanvas from './Earth';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // TODO: Integrate with Resend email edge function
    // For now, simulate success
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus('success');
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-mono text-2xl md:text-3xl mb-4 text-center">
            <span className="text-syntax-purple">async</span>{' '}
            <span className="text-syntax-function">sendMessage</span>
            <span className="text-syntax-yellow">()</span>
          </h2>
          
          <p className="text-center text-muted-foreground font-mono text-sm mb-12">
            <span className="text-syntax-comment">// Let's build something amazing together</span>
          </p>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="terminal-window">
                <div className="terminal-header">
                  <span className="terminal-dot terminal-dot-red" />
                  <span className="terminal-dot terminal-dot-yellow" />
                  <span className="terminal-dot terminal-dot-green" />
                  <span className="ml-4 text-sm text-muted-foreground font-mono">contact.sh</span>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div className="space-y-2">
                    <label className="font-mono text-sm text-syntax-cyan">
                      $ name<span className="text-syntax-purple">:</span>
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name..."
                      required
                      className="font-mono bg-terminal-bg border-terminal-border focus:border-syntax-green"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-sm text-syntax-cyan">
                      $ email<span className="text-syntax-purple">:</span>
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email..."
                      required
                      className="font-mono bg-terminal-bg border-terminal-border focus:border-syntax-green"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-sm text-syntax-cyan">
                      $ message<span className="text-syntax-purple">:</span>
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message..."
                      required
                      rows={4}
                      className="font-mono bg-terminal-bg border-terminal-border focus:border-syntax-green resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full font-mono bg-syntax-green/20 border border-syntax-green text-syntax-green hover:bg-syntax-green hover:text-background transition-all"
                  >
                    {status === 'loading' && (
                      <>
                        <Loader2 className="animate-spin mr-2" size={16} />
                        Sending...
                      </>
                    )}
                    {status === 'success' && (
                      <>
                        <Check className="mr-2" size={16} />
                        Message Sent!
                      </>
                    )}
                    {status === 'error' && (
                      <>
                        <AlertCircle className="mr-2" size={16} />
                        Error - Retry
                      </>
                    )}
                    {status === 'idle' && (
                      <>
                        <Send className="mr-2" size={16} />
                        {'> send_message'}
                      </>
                    )}
                  </Button>

                  <p className="font-mono text-xs text-muted-foreground text-center pt-2">
                    <span className="text-syntax-comment">// Response time: usually within 24h</span>
                  </p>
                </form>
              </div>
            </motion.div>

            {/* 3D Globe */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="hidden lg:block w-[600px] h-[600px]"
            >
              {/* <Globe3D /> */}
              <EarthCanvas />
              <p className="text-center font-mono text-sm text-muted-foreground mt-4">
                <span className="text-syntax-green">●</span> Available for remote work worldwide
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
