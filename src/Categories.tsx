import React, { useState } from 'react';
import Category from './Category';
interface IProps {
  service: any,
  addService: () => void
}
const Categories: React.FC<IProps> = ({ service, addService }) => {
  const [categories, setCategories] = useState<any>([])
  const addCategory = (): void => {
    setCategories([...categories,
    { id: categories.length + 1, name: "" }
    ])
  }
  const updateCategoryName = (id: number, value: string): void => {
    setCategories((categories: any) =>
      categories.map((obj: any) => {
        if (obj.id === id) {
          return { ...obj, name: value };
        }

        return obj;
      }),
    );
    console.log(categories)
  }
  const removeFromCategory = (id: number): void => {
    setCategories((categories: any) =>
      categories.filter((obj: any) => {
        return obj.id !== id;
      }),
    );
  };
  return (
    <div className="App text-center">
      <div>
        <input type="text" disabled value={"Categories"} />
        <button onClick={addCategory}>+</button>
      </div>
      {
        categories.length > 1 ? <span><div className="d-flex">
          <div className="category"></div>
        </div><div className="d-flex">
            <div className="category2" style={{ width: `${categories.length * 10}%` }}></div>
          </div></span> : <div></div>
      }
      <div className='d-flex'>{
        categories.length > 0 ?
          categories.map(
            (category: any) => <Category addService={addService} service={service} updateCategoryName={updateCategoryName} removeFromCategory={removeFromCategory} key={category.id} id={category.id} />
          )
          : <div></div>
      }</div>
    </div>
  );
}

export default Categories;
