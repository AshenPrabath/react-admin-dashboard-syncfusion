import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { productsData, productCategory, productGender, productBrand } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';
import { MdOutlineCancel } from 'react-icons/md';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';



const EditProductModal = ({ currentProduct }) => {
    const { setDialogVisible, currentColor } = useStateContext();
    const [selectedProductImages, setSelectedProductImages] = useState([]);
    const [selectedDescImages, setSelectedDescImages] = useState([]);
    const [text, setText] = useState(productsData[currentProduct].productName);

    const oldProductImages = productsData[currentProduct].productImages[0].productImages;
    const oldDescImages = productsData[currentProduct].productImages[0].productDetailImages;
    const productCategories = productCategory.map(item => item.category);
    const productBrands = productBrand.map(item => item.brand);
    

    const maxProductImages = 5;
    const maxDescImages = 6;
    const productNameMaxLength = 30;

    const handleChange = (e) => {
        if (e.target.value.length <= productNameMaxLength) {
            setText(e.target.value);
        }
    };

    const handleProductImageInput = (e) => {
        const files = Array.from(e.target.files);
        const remainingSlots = maxProductImages - selectedProductImages.length;
        const filesToAdd = files.slice(0, remainingSlots);

        if (filesToAdd.length === 0) {
            alert(`You have already reached the maximum limit of ${maxProductImages} files.`);
            return;
        }
        const imagesArray = filesToAdd.map((file) => URL.createObjectURL(file));
        setSelectedProductImages((prevImages) => [...prevImages, ...imagesArray]);
    };

    const handleDescImageInput = (e) => {
        const files = Array.from(e.target.files);
        const remainingSlots = maxDescImages - selectedDescImages.length;
        const filesToAdd = files.slice(0, remainingSlots);

        if (filesToAdd.length === 0) {
            alert(`You have already reached the maximum limit of ${maxDescImages} files.`);
            return;
        }
        const imagesArray = filesToAdd.map((file) => URL.createObjectURL(file));
        setSelectedDescImages((prevImages) => [...prevImages, ...imagesArray]);
    };

    const handleRemoveProductImage = (index) => {
        const newImages = [...selectedProductImages];
        newImages.splice(index, 1);
        setSelectedProductImages(newImages);
    };

    const handleRemoveDescImage = (index) => {
        const newImages = [...selectedDescImages];
        newImages.splice(index, 1);
        setSelectedDescImages(newImages);
    };

    const dialogClose = () => {
        setDialogVisible(false);
        document.body.style.overflow = 'visible';
    }

    useEffect(() => {
        setSelectedProductImages(oldProductImages);
        setSelectedDescImages(oldDescImages);
    }, [currentProduct]);

    return (
        <div>
            <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50'>
                <div className=' p-10 w-8/12 h-[90vh] bg-white rounded-lg '>
                    <div className=' h-full pb-16 '>
                        <div className='flex justify-between border-b-2 '>
                            <p className='text-3xl font-bold pb-2 '>Edit Product</p>
                            <button onClick={() => dialogClose()} >Close</button>
                        </div>
                        <div className='flex h-full p-3 w-full overflow-auto '>
                            <div className=' w-7/12 pr-5'>
                                <p className='font-semibold text-lg pb-2'>General Information</p>
                                <p className='font-light text-xs text-gray-400 '>
                                    {`These are the general information of your product. please include real data. please not that all fields are required`}
                                </p>
                                <div className='flex w-full items-center pb-1 pt-4  '>
                                    <p className='w-1/3 text-sm font-semibold'>Product Name</p>
                                    <div className='w-2/3 rounded-md pt-1'>
                                        <input
                                            className={`w-full py-1 rounded border border-gray-300 focus:border-[${currentColor}] outline-none transition duration-300`}
                                            type="text"
                                            value={text}
                                            onChange={handleChange}
                                            maxLength={productNameMaxLength}
                                            style={{ 
                                                paddingTop: '8px', 
                                                paddingBottom: '8px', 
                                                paddingLeft: '10px', 
                                                paddingRight: '5px',
                                                fontSize: '13px',
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='flex w-full items-center pb-5  '>
                                    <div className='w-1/3 text-sm font-semibold'></div>
                                    <div className='flex w-2/3 justify-between'>
                                        <p className={`pl-3 font-light text-xs text-gray-400`}>*Do not Exceed over 30 characters for Product Name </p>
                                        <p className='pl-3 font-light text-xs text-gray-400'>{text.length}/{productNameMaxLength}</p>
                                    </div>
                                </div>
                                <div className='flex w-full items-center pb-1  '>
                                    <p className='w-1/3 text-sm font-semibold'>Short Description</p>
                                    <div className='border-1 w-2/3 rounded-md pt-1'>
                                        <div className='px-3'>
                                            <TextBoxComponent
                                                htmlAttributes={{
                                                    maxLength: 50,
                                                    // onchange: { changeHandle }
                                                }}
                                                multiline={true}
                                                placeholder="Enter Product Name"
                                                value={productsData[currentProduct].productDesc}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex w-full items-center pb-5  '>
                                    <div className='w-1/3 text-sm font-semibold'></div>
                                    <p className='pl-3 font-light text-xs text-gray-400'>* Do not Exceed over 60 characters for Product Name</p>
                                </div>
                                <div className='flex w-full items-center pb-1 '>
                                    <p className='w-1/3 text-sm font-semibold'>Product Code</p>
                                    <div className='border-1 w-2/3 rounded-md pt-1'>
                                        <div className='px-3'>
                                            <TextBoxComponent
                                                disabled
                                                placeholder="Enter Product Name"
                                                value={productsData[currentProduct].productId}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex w-full items-center pb-5 border-b-1 border-dashed  '>
                                    <div className='w-1/3 text-sm font-semibold'></div>
                                    <p className='pl-3 font-light text-xs text-gray-400'>* Product Code is automatically generated. Cannot change</p>
                                </div>
                                <div className='flex w-full items-center py-5  '>
                                    <p className='w-1/3 text-sm font-semibold'>Category</p>
                                    <div className='border-1 w-2/3 rounded-md pt-1'>
                                        <div className='px-3'>
                                            <DropDownListComponent dataSource={productCategories} value={productsData[currentProduct].productCategory.category} />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex w-full items-center pb-5  '>
                                    <p className='w-1/3 text-sm font-semibold'>Brand</p>
                                    <div className='border-1 w-2/3 rounded-md pt-1'>
                                        <div className='px-3'>
                                            <DropDownListComponent dataSource={productBrands} value={productsData[currentProduct].productBrand.brand} />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex w-full items-center pb-5 border-b-1 border-dashed  '>
                                    <p className='w-1/3 text-sm font-semibold'>Gender</p>
                                    <div className='border-1 w-2/3 rounded-md pt-1'>
                                        <div className='px-3'>
                                            <DropDownListComponent dataSource={productGender} value={productsData[currentProduct].productGender} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-5/12'>
                                <p className='font-semibold text-lg pb-2'>Product Images</p>
                                <p className='font-light text-xs text-gray-400 '>
                                    {`You need to add maximum of ${maxProductImages} images. Pay attention to the quality of the pictures you add. Pictures must be in certain dimensions.`}
                                </p>
                                <p className='font-light text-sm text-gray-500 py-4'>Cover Image</p>
                                <div className='flex w-full justify-center'>
                                    {selectedProductImages.length > 0 ? (
                                        <img
                                            className="rounded-xl h-48 w-48 md:ml-3 object-contain bg-gray-50"
                                            src={selectedProductImages[0]}
                                            alt="Your first uploaded Image will be set as the cover image"
                                        />) :
                                        <div
                                            className="flex justify-center items-center rounded-xl h-48 w-48 md:ml-3 object-contain bg-gray-50">
                                            <p className='p-5 text-sm text-gray-600'>Your first uploaded Image will be set as the cover image</p>
                                        </div>
                                    }
                                </div>
                                <div className='flex w-full justify-between'>
                                    <p className='font-light text-sm text-gray-500 py-4'>Upload Images</p>
                                    <p className='font-light text-sm text-gray-500 py-4'> {selectedProductImages.length} of {maxProductImages} images uploaded </p>
                                </div>

                                <div className='grid grid-cols-4 gap-3 justify-center pb-4'>
                                    {selectedProductImages.map((image, index) => (
                                        <div className='relative justify-center flex w-full'>
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`${index + 1}`}
                                                className="rounded-xl h-20 w-20 object-contain bg-gray-50"
                                            />
                                            <button
                                                onClick={() => handleRemoveProductImage(index)}
                                                className="absolute top-1 right-3 bg-gray-50 text-red-500 rounded-full "
                                            ><MdOutlineCancel /></button>
                                        </div>
                                    ))}
                                    <div className='relative justify-center flex w-full'>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleProductImageInput}
                                            multiple
                                            className="hidden"
                                            id="product-file-input"
                                        />
                                        <label
                                            htmlFor="product-file-input"
                                            className="bg-gray-50 h-20 w-20 border-dashed border-2 flex justify-center items-center object-contain text-gray-400 px-4 py-2 rounded-md cursor-pointer"
                                        >
                                            <FaPlus />
                                        </label>
                                    </div>
                                </div>
                                <p className='font-semibold text-lg py-2 border-t-1'>Description Images</p>
                                <p className='font-light text-xs text-gray-400 '>
                                    {`You need to add maximum of ${maxProductImages} images. these Images will apper bottom of the product card. add more detailed images for aware the customer of your product`}
                                </p>
                                <div className='flex w-full justify-between'>
                                    <p className='font-light text-sm text-gray-500 py-4'>Upload Images</p>
                                    <p className='font-light text-sm text-gray-500 py-4'> {selectedDescImages.length} of {maxDescImages} images uploaded </p>
                                </div>
                                <div className='grid-flow-col grid-rows-1 gap-x-1'>
                                    {selectedDescImages.map((image, index) => (
                                        <div className='relative justify-center flex w-full pb-2'>
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`${index + 1}`}
                                                className="rounded-xl h-auto w-auto object-contain bg-gray-50"
                                            />
                                            <button
                                                onClick={() => handleRemoveDescImage(index)}
                                                className="absolute top-1 right-3 bg-gray-50 text-red-500 rounded-full "
                                            ><MdOutlineCancel /></button>
                                        </div>
                                    ))}
                                    <div className='relative justify-center flex w-full'>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleDescImageInput}
                                            multiple
                                            className="hidden"
                                            id="desc-file-input"
                                        />
                                        <label
                                            htmlFor="desc-file-input"
                                            className="bg-gray-50 h-20 w-full border-dashed border-2 flex justify-center items-center object-contain text-gray-400 px-4 py-2 rounded-md cursor-pointer"
                                        >
                                            <FaPlus />
                                        </label>
                                    </div>

                                </div>

                            </div>
                        </div>


                        <div className='flex justify-end font-semibold text-lg py-2 border-t-1'>
                            ss
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProductModal;
