import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';

interface MyFormValues {
  firstName: string;
}

const TodoModal: React.FC = () => {
  const [modalIsOpen, setOpenModal] = useState(false);
  const openModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        Create
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Formik
          initialValues={{ firstName: '' }}
          onSubmit={(
            values: MyFormValues,
            actions: FormikActions<MyFormValues>,
          ) => {
            console.log({ values, actions });
            actions.setSubmitting(false);
          }}
          render={(formikBag: FormikProps<MyFormValues>) => (
            <Form>
              <Field
                name="firstName"
                render={({ field, form }: FieldProps<MyFormValues>) => (
                  <div>
                    <input type="text" {...field} placeholder="First Name" />
                    {form.touched.firstName &&
                      form.errors.firstName &&
                      form.errors.firstName}
                  </div>
                )}
              />
            </Form>
          )}
        />
        <h2>Add Todo</h2>
        <button type="button" onClick={closeModal}>
          close
        </button>
        <button type="button">Create</button>
      </Modal>
    </>
  );
};

export default TodoModal;
