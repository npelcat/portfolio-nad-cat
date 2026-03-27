"use client";

import { motion } from "framer-motion";
import { MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg outline-none transition-all border border-slate-300 dark:border-slate-700 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-brand focus:border-transparent";

  const fields = [
    {
      id: "name",
      label: "Nom complet",
      type: "text",
      placeholder: "Jane Dupont",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "jane.dupont@example.com",
    },
    {
      id: "subject",
      label: "Sujet",
      type: "text",
      placeholder: "Opportunité professionnelle",
    },
  ];

  return (
    <section
      id="contact"
      className="section-container bg-surface-alt dark:bg-surface-alt"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          Me <span className="gradient-text">Contacter</span>
        </h2>
        <p className="text-center text-muted dark:text-muted mb-12 max-w-2xl mx-auto">
          Une question ? Un projet ? N&apos;hésitez pas à me contacter
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Parlons de votre projet
              </h3>
              <p className="text-muted dark:text-muted mb-8">
                Je suis actuellement en poste et à l&apos;écoute
                d&apos;opportunités professionnelles pour septembre 2026.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  label: "Localisation",
                  content: (
                    <p className="text-muted dark:text-muted">
                      Paris, Île-de-France
                    </p>
                  ),
                },
              ].map(({ icon: Icon, label, content }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="p-3 bg-brand-tint dark:bg-brand-tint rounded-lg shrink-0">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{label}</h4>
                    {content}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-surface dark:bg-surface rounded-xl p-8 card-shadow space-y-6"
            >
              {fields.map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block text-sm font-medium mb-2"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    value={formData[id as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    placeholder={placeholder}
                    className={inputClass}
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Votre message..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3 bg-brand hover:bg-brand-dark disabled:opacity-50
                  text-white rounded-lg font-semibold transition-all cursor-pointer
                  hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/30 flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="p-4 bg-success dark:bg-success text-success rounded-lg text-center">
                  Message envoyé avec succès ! Je vous répondrai rapidement.
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-error dark:bg-error text-error rounded-lg text-center">
                  Une erreur est survenue. Veuillez réessayer.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
