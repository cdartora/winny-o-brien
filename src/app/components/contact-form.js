"use client";
import { cakelan } from "../page";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSubmitSuccess(false);
    }

    setIsSubmitting(false);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <form onSubmit={handleSubmit}>
      <h1 className={`${cakelan.className} text-3xl my-4 text-antiqueWhite`}>
        MAIS ALGUMA DÚVIDA?
      </h1>
      <p className="md:text-md text-sm">NOME</p>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full h-10 bg-richBlack border-[1px] rounded-tl-lg p-2"
      />
      <p className="md:text-md text-sm mt-4">E-MAIL</p>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full h-10 bg-richBlack border-[1px] rounded-tl-lg p-2"
      />
      <p className="md:text-md text-sm mt-4">MENSAGEM</p>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="w-full h-44 bg-richBlack border-[1px] rounded-tl-lg p-2"
      />
      <div className="w-full flex items-center gap-2">
        {submitSuccess && (
          <p className="text-green-500 mt-4">Email enviado com sucesso!</p>
        )}
        {!submitSuccess && (
          <p className="text-red-500 mt-4">
            Erro ao enviar o email. Tente novamente.
          </p>
        )}

        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`mt-4 float-right hover:bg-white transition-all hover:text-richBlack flex justify-around self-end gap-2 md:text-md border px-4 md:px-8 py-2 rounded-full place-self-start ${
            isFormValid ? "" : "opacity-50 cursor-not-allowed"
          }`}
        >
          <span className="whitespace-nowrap">
            {isSubmitting ? "Enviando..." : "Enviar"}
          </span>
        </button>
      </div>
    </form>
  );
}
