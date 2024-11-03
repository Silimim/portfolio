import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert.tsx";

const Contacts = () => {

    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { alert, showAlert, hideAlert } = useAlert();

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleFocus = (e: any) => {
        e.target.classList.add("focus");
    }

    const handleBlur = (e: any) => {
        if (e.target.value === "") {
            e.target.classList.remove("focus");
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                from_email: form.email,
                message: form.message,
                to_name: "Simone",
                to_email: "baptistesimone19@gmail.com"
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            showAlert({text: "Message sent successfully!", type: "success"});

            setTimeout(() => {
                hideAlert();
                setForm({
                    name: "",
                    email: "",
                    message: ""
                });
            }, 2000);
        }).catch((err) => {
            setIsLoading(false);
            showAlert({text: "An error occurred, please try again later.", type: "danger"});
            console.error(err);
        });
    }

    return (
        <section className={"relative flex lg:flex-row flex-col max-container h-[100dvh]"}>
            {alert.show && <Alert {...alert}/>}
            <div className={"flex-1 min-w-[50%] flex flex-col"}>
                <h1 className={"head-text"}>Contact me</h1>
                <form ref={formRef} className={"w-full flex flex-col gap-7 mt-14"} onSubmit={handleSubmit}>
                    <label className={"text-black-500 font-semibold"}>
                        Name
                        <input type="text" name={"name"} className={"input"} placeholder={"Jeff"} value={form.name}
                               onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required/>
                    </label>
                    <label className={"text-black-500 font-semibold"}>
                        Email
                        <input type="email" name={"email"} className={"input"} placeholder={"jeff@amazing.com"} value={form.email}
                               onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required/>
                    </label>
                    <label className={"text-black-500 font-semibold"}>
                        Your message
                        <textarea rows={4} name={"message"} className={"textarea"} placeholder={"Let me know how can i help you!"} value={form.message}
                               onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required/>
                    </label>
                    <button type={"submit"} className={"btn"} onFocus={handleFocus} onBlur={handleBlur}>
                        {isLoading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contacts