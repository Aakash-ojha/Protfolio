import { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    toast.loading("Sending message...", { id: "sending" });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setMessageSent(true);
          toast.success("Message sent successfully!", { id: "sending" });
          console.log("SUCCESS!");
          setLoading(false);
          form.current?.reset();
          setTimeout(() => setMessageSent(false), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message. Please try again.", {
            id: "sending",
          });
          setLoading(false);
        },
      );
  };

  return (
    <section id="contact" className="min-h-screen text-white py-20 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl font-bold tracking-tighter">
            Let's <span className="text-orange-500">Connect</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            Have a project in mind or just want to say hi? Feel free to reach
            out. I'm always open to discussing new projects and creative ideas.
          </p>

          <div className="flex gap-6 text-3xl">
            <a
              href="https://github.com/Aakash-ojha"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aakash-ojha-87948b395/"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://x.com/Aakash599147991"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              <RiTwitterXLine />
            </a>
            <a
              href="mailto:aakashojha000@gmail.com"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              <SiGmail />
            </a>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="
            bg-slate-900/40 border border-slate-800 p-8 rounded-3xl shadow-2xl
            transition-all duration-700 ease-out transform-3d
            /* Gentle 3D tilt on hover */
            group-hover:rotate-x-10 group-hover:rotate-y-[-10deg] group-hover:-translate-y-2
          "
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                name="user_name"
                type="text"
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl p-4 focus:border-orange-500 outline-none transition-colors"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl p-4 focus:border-orange-500 outline-none transition-colors"
                placeholder="email@example.com"
                name="user_email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl p-4 focus:border-orange-500 outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
                name="message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                w-full py-4 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-xl 
                transition-all duration-300 transform active:scale-95
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
