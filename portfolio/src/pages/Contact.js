import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Vous pouvez utiliser cette fonction pour traiter les données du formulaire
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Nom</label>
          <input type="text" className="form-control" {...register('name', { required: true })} />
          {errors.name && <p className="text-danger">Ce champ est requis</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" {...register('email', { required: true })} />
          {errors.email && <p className="text-danger">Ce champ est requis</p>}
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control" rows={3} {...register('message', { required: true })} />
          {errors.message && <p className="text-danger">Ce champ est requis</p>}
        </div>

        <button className="btn btn-primary" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
