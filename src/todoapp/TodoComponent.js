
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { createTodoApi, retreiveTodoApi, updateTodoApi } from './TodoApiService';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import moment from 'moment';

export default function TodoComponent() {

    const { id } = useParams()


    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')

    const navigate = useNavigate()

    useEffect(
        () => retreiveTodos(),
        [id]
    )

    function retreiveTodos() {
        if (id !== -1) {
            retreiveTodoApi(id)
                .then(response => {
                    setDescription(response.data.description)
                    setTargetDate(response.data.targetDate)
                })
                .catch(error => console.log(error))
        }
    }

    function onSubmit(values) {
        console.log("on Submit clicked")
        console.log(values);

        const todo = {
            id,
            username: 'rohit',
            description: values.description,
            targetDate: values.targetDate,
            isDone: false
        }
        console.log(todo)

        if (id === -1) {
            createTodoApi()
            createTodoApi('rohit', todo)
                .then(response => {
                    console.log(response)
                    console.log("response")
                    navigate('/todos')
                })
                .catch(error => console.log(error))
        }

        else 
        {
            updateTodoApi(id, todo)
                .then(response => {
                    console.log(response)
                    console.log("response")
                    navigate('/todos')
                })
                .catch(error => console.log(error))

        }
    }

    function validate(values) {
        let errors = {}
        if (values.description.length < 5) {
            errors.description = 'Enter at least 5 characters'
        }
        if (!values.targetDate == null || values.targetDate == '' 
                    || !moment(values.targetDate).isValid()) 
        {
            errors.targetDate = 'Enter a target date'
        }

        console.log(values);
        console.log('validate is called');
        return errors;
    }

    return (
        <div className="container">
            <h1>Enter todo details </h1>
            <div>
                <Formik initialValues={{ description, targetDate }}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    {(props) => (
                        <Form>
                            <ErrorMessage
                                name="description"
                                component="div"
                                className="alert alert-warning"
                            />
                            <ErrorMessage
                                name="targetDate"
                                component="div"
                                className="alert alert-warning"
                            />

                            <fieldset className='form-group'>
                                <label>Description</label>
                                <Field type='text' className='form-control' name='description' />
                            </fieldset>
                            <fieldset className='form-group'>
                                <label>Date</label>
                                <Field type='date' className='form-control' name='targetDate' />
                            </fieldset>

                            <div>
                                <button className='btn btn-success m-3' type='submit'>Save</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
