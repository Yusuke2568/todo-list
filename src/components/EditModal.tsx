import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import { Formik, FormikActions, FormikProps, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Todo as ITodo } from '../reducer';
import TodoSchema from '../schema/todo_schema';

interface Props {
  modalIsOpen: boolean;
  setModalIsClose: () => void;
  editTodo: ITodo | null;
}

interface MyFormValues {
  id: number;
  title: string;
  body: string;
  check: boolean;
  deadline: string;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '400px',
    width: '400px',
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    form: {
      width: '300px',
    },
    button: {
      margin: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
  }),
);

const EditModal: React.FC<Props> = ({
  modalIsOpen,
  setModalIsClose,
  editTodo,
}) => {
  const classes = useStyles();

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={setModalIsClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3>Edit Todo</h3>
        <Formik
          initialValues={
            editTodo || {
              id: 0,
              title: 'タイトル',
              body: 'テキスト',
              check: false,
              deadline: '2010-10-10',
            }
          }
          validationSchema={TodoSchema}
          onSubmit={(
            values: MyFormValues,
            actions: FormikActions<MyFormValues>,
          ) => {
            // update用のactionを投げる
            console.log(values);
          }}
          render={(Props: FormikProps<MyFormValues>) => (
            <Form>
              <Field type="hidden" name="id" />
              <h3>タイトル</h3>
              <Field
                type="text"
                name="title"
                component={TextField}
                className={classes.form}
              />
              {Props.errors.title && Props.touched.title && (
                <div>{Props.errors.title}</div>
              )}
              <h3>テキスト</h3>
              <Field
                type="text"
                name="body"
                component={TextField}
                margin="dense"
                rows="3"
                variant="outlined"
                multiline
                rowsMax="8"
                className={classes.form}
              />
              {Props.errors.body && Props.touched.body && (
                <div>{Props.errors.body}</div>
              )}
              <Field type="hidden" name="check" />
              <h3>期限</h3>
              <Field
                type="text"
                name="deadline"
                component={TextField}
                margin="dense"
                variant="outlined"
                multiline
                className={classes.form}
              />
              <br />
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                type="submit"
              >
                Update
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
                onClick={setModalIsClose}
              >
                Cancel
              </Button>
            </Form>
          )}
        />
      </Modal>
    </>
  );
};

export default EditModal;
