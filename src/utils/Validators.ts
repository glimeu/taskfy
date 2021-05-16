import * as Yup from 'yup';

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Este campo tem que ter pelo menos 4 caracteres.')
    .max(20, 'Este campo pode ter no máximo 20 caracteres.')
    .required('Este campo é obrigatório.'),
  email: Yup.string()
    .email('Este campo tem que ser um email válido.')
    .required('Este campo é obrigatório.'),
  message: Yup.string()
    .min(8, 'Este campo tem que ter pelo menos 8 caracteres.')
    .max(300, 'Este campo pode ter no máximo 300 caracteres.')
    .required(() => 'Este campo é obrigatório.'),
});

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Este campo tem que ser um email válido.')
    .required('Este campo é obrigatório.'),
  password: Yup.string()
    .min(8, 'Este campo tem que ter pelo menos 8 caracteres.')
    .max(20, 'Este campo pode ter no máximo 20 caracteres.')
    .required('Este campo é obrigatório.'),
});

export const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(8, 'Este campo tem que ter pelo menos 8 caracteres.')
    .max(20, 'Este campo pode ter no máximo 20 caracteres.')
    .required('Este campo é obrigatório.'),
  surname: Yup.string()
    .min(8, 'Este campo tem que ter pelo menos 8 caracteres.')
    .max(20, 'Este campo pode ter no máximo 20 caracteres.')
    .required('Este campo é obrigatório.'),
  email: Yup.string()
    .email('Este campo tem que ser um email válido.')
    .required('Este campo é obrigatório.'),
  password: Yup.string()
    .min(8, 'Este campo tem que ter pelo menos 8 caracteres.')
    .max(20, 'Este campo pode ter no máximo 20 caracteres.')
    .required('Este campo é obrigatório.'),
});
