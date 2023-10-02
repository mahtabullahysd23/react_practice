import "./AddProducts.scss";
import useAddBook from "../../customHooks/useAddBook";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const AddProducts = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const {isSuccess , setProduct} = useAddBook();

  const onSubmit = (data) => {
    setProduct(data);
    console.log(data);
    reset();
  };

  return (
    <div className="add-product">
      <h2>Add New Product</h2>
      {isSuccess && <div className="success-message">Successfully Updated Successfully!</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-form">
          <div>
            <div>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required",
                maxLength:{
                  value:50,
                  message:"Name should be less than 50 characters"
                }
              }}
                render={({ field }) => (
                  <div>
                    <label htmlFor="name">Name:</label>
                    <input
                      autoComplete="off"
                      type="text"
                      id="name"
                      {...field}
                  
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                  </div>
                )}
              />
            </div>
            <div>
              <Controller
                name="price"
                control={control}
                rules={{
                  required: "Price is required",
                  min: { value: 0, message: "Price should be greater than 0" },
                }}
                render={({ field }) => (
                  <div>
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" {...field} />
                    {errors.price && <p>{errors.price.message}</p>}
                  </div>
                )}
              />
            </div>
            <div>
              <Controller
                name="stock"
                control={control}
                rules={{ required: "Stock is required",
                min: { value: 0, message: "Stock should be greater than 0" }, }}
                render={({ field }) => (
                  <div>
                    <label htmlFor="stock">Stock:</label>
                    <input type="number" id="stock" {...field}  />
                    {errors.stock && <p>{errors.stock.message}</p>}
                  </div>
                )}
              />
            </div>
            <div>
              <Controller
                name="author"
                control={control}
                rules={{ required: "Author is required" ,
                maxLength:{
                  value:50,
                  message:"Author should be less than 50 characters"
                }
              
              }}
                render={({ field }) => (
                  <div>
                    <label htmlFor="author">Author:</label>
                    <input
                      autoComplete="off"
                      type="text"
                      id="author"
                      {...field}
                      
                    />
                    {errors.author && <p>{errors.author.message}</p>}
                  </div>
                )}
              />
            </div>
            <div>
              <Controller
                name="publisher"
                control={control}
                rules={{ required: "Publisher is required",
              maxLength:{
                value:50,
                message:"Publisher should be less than 50 characters"
              }
              }}
                render={({ field }) => (
                  <div>
                    <label htmlFor="publisher">Publisher:</label>
                    <input
                      autoComplete="off"
                      type="text"
                      id="publisher"
                      {...field}
                    
                    />
                    {errors.publisher && <p>{errors.publisher.message}</p>}
                  </div>
                )}
              />
            </div>
          </div>
          <div>
            <div>
              <Controller
                name="genre"
                control={control}
                rules={{ required: "Genre is required",
              maxLength:{
                value:50,
                message:"Genre should be less than 50 characters"
              }
              }}
                render={({ field }) => (
                  <div>
                    <label htmlFor="genre">Genre:</label>
                    <input
                      autoComplete="off"
                      type="text"
                      id="genre"
                      {...field}
                    
                    />
                    {errors.genre && <p>{errors.genre.message}</p>}
                  </div>
                )}
              />
            </div>
            <div>
              <Controller
                name="isbn"
                control={control}
                rules={{
                  required: "ISBN is required",
                  pattern: {
                    value: /^[0-9-]*$/,
                    message: "Invalid ISBN",
                  },
                }}
                render={({ field }) => (
                  <div>
                    <label htmlFor="isbn">ISBN:</label>
                    <input
                      autoComplete="off"
                      type="text"
                      id="isbn"
                      {...field}
                     
                    />
                    {errors.isbn && <p>{errors.isbn.message}</p>}
                  </div>
                )}
              />
            </div>
            <div>
              <Controller
                name="pages"
                control={control}
                rules={{ required: "Pages is required", pattern: /^[0-9]*$/ ,
              maxLength:{
                value:5,
                message:"Pages should be less than 5 characters"}
              }}
                render={({ field }) => (
                  <div>
                    <label htmlFor="pages">Pages:</label>
                    <input
                      autoComplete="off"
                      type="number"
                      id="pages"
                      {...field}
                     
                    />
                    {errors.pages && <p>{errors.pages.message}</p>}
                  </div>
                )}
              />
            </div>
            <div>
              <Controller
                name="language"
                control={control}
                rules={{ required: "Language is required" ,
              maxLength:{
                value:50,
                message:"Language should be less than 50 characters"}
              }}
                render={({ field }) => (
                  <div>
                    <label htmlFor="language">Language:</label>
                    <input
                      autoComplete="off"
                      type="text"
                      id="language"
                      {...field}
                    />
                    {errors.language && <p>{errors.language.message}</p>}
                  </div>
                )}
              />
            </div>
            <button type="submit">Add Product</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
