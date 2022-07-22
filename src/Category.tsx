import React, { useState } from 'react'
import SubCategory from './Subcategory';

interface IProps {
    id: number,
    updateCategoryName: (id: number, value: string) => void,
    removeFromCategory: (id: number) => void,
    service: any,
    addService: () => void
}

const Category: React.FC<IProps> = ({ id, updateCategoryName, removeFromCategory, service, addService }) => {
    const [inputValue, setInputValue] = useState<string | number | null>("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.target.value)
    }
    const [update, setUpdate] = useState<boolean>(true);
    const [addValue, setAddValue] = useState<boolean>(false);
    const toggleAddValue = (): void => {
        setAddValue(!addValue);
    };
    const toggleButton = (): void => {
        setUpdate(!update);
    };
    const [subcategories, setSubcategories] = useState<any>([]);
    const addCategory = (): void => {
        setSubcategories([
            ...subcategories,
            { id: subcategories.length + 1, name: "" },
        ]);
    };
    const updateSubCategoryName = (id: number, value: string | number | null): void => {
        setSubcategories((categories: any) =>
            categories.map((obj: any) => {
                if (obj.id === id) {
                    return { ...obj, name: value };
                }

                return obj;
            }),
        );
        console.log(subcategories)
    }
    const removeFromSubCategory = (id: number): void => {
        setSubcategories((categories: any) =>
            categories.filter((obj: any) => {
                return obj.id !== id;
            }),
        );
    };
    return (
        <div className="text-center">
            <div>
                <div className="d-flex">
                    <div className="category"></div>
                </div>
                <input
                    style={{backgroundColor:`http://randomcolour.com/`}}
                    type="text"
                    onChange={(e) => handleChange(e)}
                    disabled={update ? false : true}
                />
                {update ? (
                    <span>
                        <button
                            onClick={() => {
                                updateSubCategoryName(id, inputValue);
                                toggleButton();
                            }}
                        >
                            ok
                        </button>
                        <button onClick={() => removeFromCategory(id)}>
                            x
                        </button>
                    </span>
                ) : (
                    <span>
                        <button onClick={toggleButton}>update</button>
                        <button onClick={toggleAddValue}>+</button>
                        <button onClick={() => removeFromCategory(id)}>
                            x
                        </button>
                        {
                            addValue ?
                                <div className='addValue'>
                                    <h3>What do you want to create</h3>
                                    <button onClick={()=>{addCategory();toggleAddValue()}}>Category</button><button onClick={() => { addService(); toggleAddValue(); addCategory() }}>Service</button>
                                </div> : <div></div>
                        }
                    </span>
                )}
            </div>
            {
                subcategories.length > 1 ? <span><div className="d-flex">
                    <div className="category"></div>
                </div><div className="d-flex">
                        <div className="category2"></div>
                    </div></span> : <div></div>
            }
            <div className="d-flex">
                {subcategories.length > 0 ? (
                    subcategories.map((category: any) => (
                        <SubCategory
                            updateCategoryName={updateSubCategoryName}
                            removeFromCategory={removeFromSubCategory}
                            key={category.id}
                            id={category.id}
                            service={service}
                            addService={addService}
                        />
                    ))
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    )
}
export default Category