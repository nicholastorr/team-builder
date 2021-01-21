import React from 'react'

function Form(props) {
    const {values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        update(name,value)

    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }


    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>
                    username
                <input
                name = 'username'
                type = 'text'
                placeholder = 'username'
                value= {values.username}
                onChange= {onChange}
                />
                </label>

                <label>
                    Email
                    <input
                        name='email'
                        type='email'
                        placeholder='enter email'
                        maxLength='30'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>----Select A Role----</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Project Manager'>Project Manager</option>
                        <option value='Tester'>Tester</option>
                        <option value='Designer'>Designer</option>
                    </select>
                </label>


            <button id='submit'>submit</button>

            </div>
        </form>
    )





}

export default Form;
