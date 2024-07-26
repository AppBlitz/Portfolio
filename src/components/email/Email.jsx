import { useForm } from "react-hook-form";
import { send } from "./send";
export const Email = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div className="w-screen h-screen flex justify-center  items-center ">
      <section>
        <h1 className="text-6xl font-mono">Contact</h1>
        <br />
        <form onSubmit={handleSubmit(send)}>
          <section>
            <label className="text-black">You name:</label>
            <br />
            <input
              className="w-60"
              type="text"
              {...register("name", {
                required: true,
                maxlenght: 20,
              })}
            />
            {errors.name?.type === "required" && <p>EL nombre en requerido</p>}
          </section>
          <section>
            <label>Your email:</label>
            <br />
            <input
              className="w-60"
              type="text"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            {errors.email?.type === "required" && <p>El correo es requerido</p>}
            {errors.email?.type === "pattern" && (
              <p> EL correo no esta bien escrito</p>
            )}
          </section>
          <section>
            <label>Message:</label>
            <br />
            <textarea
              className="resize-none w-80  min--wpx h-60"
              {...register("message", { required: true })}
            />
            {errors.message?.type === "required" && (
              <p>El mensaje es obligatorio</p>
            )}
          </section>
          <button className="rounded-full ">Send</button>
        </form>
      </section>
    </div>
  );
};
