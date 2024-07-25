import { useForm } from "react-hook-form"
import { send } from './send'
export const Email = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  return (
    <>
      <form onSubmit={handleSubmit(send)}>
        <section>
          <label>You name:</label>
          <input type="text"{...register("name", {
            required: true,
            maxlenght: 20,
          })
          } />
          {errors.name?.type === "required" && <p>EL nombre en requerido</p>}
        </section>
        <section>
          <label>Your email:</label>
          <input type="text"{...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
          })} />
          {errors.email?.type === "required" && <p>El correo es  requerido</p>}
          {errors.email?.type === "pattern" && <p> EL correo no esta bien escrito</p>}
        </section>
        <section>
          <label>your idea:</label>
          <input {...register("idea", { required: true, maxlenght: 400 })} />
          {errors.idea?.type === "required" && <p>la idea en requerida en requerido</p>}
          {errors.idea?.type === "maxLength" && <p>No puede tener más de 400 caracteres</p>}
        </section>
        <input type="submit" value="send" />
      </form>
    </>
  );
}
