import { Formik } from 'formik';
import React from 'react'

const Library = () => { 
  

  const [books, setBooks] = React.useState([])
  
  const [updatingIndex, setUpdatingIndex] = React.useState(-1);

  const handleFormSubmit = (formValues, formik) => {
    const currentStudents = [...books]
    currentStudents.push(formValues)
    setBooks(currentStudents)
    formik.resetForm()
  }

  //callback
  const handleEdit = (editedbook, callbacks) => { 
    const editedbookIndex = books.findIndex(book =>
        book.title === editedbook.title && 
        book.quantity === editedbook.quantity
    )

    setUpdatingIndex(editedbookIndex)
    callbacks.setFieldValue('title', editedbook.title)
    callbacks.setFieldValue('quantity', editedbook.quantity)
  }

  const handleUpdate = (values) => { 
    console.log(values)
    // const updatedBooks = [...books]
    // updatedBooks[updatingIndex] = form
    // setBooks(updatedBooks) //reset state
    // resetForm() //reset form
    // setUpdatingIndex(-1)
  }

  return (
      <div>
      <h1>Library</h1>
      <Formik
        initialValues={{
          title: '',
          quantity: '',
        }}

        onSubmit={handleFormSubmit}
      >
        {({ handleChange, values, handleSubmit, setFieldValue }) => (
          <>
            <div>
              <div>
                <label>Title: </label>
                <input type='text' name="title" onChange={handleChange} value={values.title} />
              </div>
              <div>
                <label>Quantity: </label>
                <input type="number" name="quantity" onChange={handleChange} value={values.quantity}  />
              </div>
              {updatingIndex >= 0 ?  <button onClick={() => handleUpdate(values)}>Update</button> :  <button type="button" onClick={handleSubmit}>Submit</button>}
            </div>
            <table>
              <thead>
                <tr>
                  <td>Title</td>
                  <td>Quantity</td>
                </tr>
              </thead>
              <tbody>
                {books.map(book => (
                  <tr key={book?.title}>
                    <td>{book?.title}</td>
                    <td>{book?.quantity}</td>
                    <td>
                      <button onClick={() => handleEdit(book, {setFieldValue})}>Edit</button>
                      <button onClick={() => console.log('delete')}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
          )}
        
      </Formik> 
      </div>
  )
}

export default Library