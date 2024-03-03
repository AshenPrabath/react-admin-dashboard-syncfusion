import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { productsData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';
import { MdOutlineCancel } from 'react-icons/md';


const EditProductModal = ({ currentProduct }) => {
    const { setDialogVisible } = useStateContext();
    const [selectedImages, setSelectedImages] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false)

    const oldImages = productsData[currentProduct].productImages[0].productImages;
    const MAX_FILES_LIMIT = 5;

    const handleFileInputChange = (e) => {
        const files = Array.from(e.target.files);
        let trimmedFiles = files.slice(0, MAX_FILES_LIMIT);
        if (trimmedFiles.length + selectedImages.length > MAX_FILES_LIMIT) {
            alert(`You can only select up to ${MAX_FILES_LIMIT} files.`);
            return;
        }
        const imagesArray = files.map((file) => URL.createObjectURL(file));
        setSelectedImages((prevImages) => [...prevImages, ...imagesArray]);
    };
    const handleRemoveImage = (index) => {
        const newImages = [...selectedImages];
        newImages.splice(index, 1);
        setSelectedImages(newImages);
    };

    const dialogClose = () => {
        setDialogVisible(false);
        document.body.style.overflow = 'visible';
    }

    useEffect(() => {
        setSelectedImages(oldImages);
    }, [currentProduct]);

    return (
        <div>
            <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50'>
                <div className=' p-10 w-8/12 h-[90vh] bg-white rounded-lg '>
                    <div className='h-full pb-14 '>
                        <div className='flex justify-between border-b-2 '>
                            <p className='text-3xl font-bold pb-2 '>Edit Product</p>
                            <button onClick={() => dialogClose()} >close</button>
                        </div>
                        <div className='flex h-full p-3 w-full'>
                            <div className='overflow-auto w-7/12'>
                                <p className='font-semibold text-lg'>General Information</p>
                                <div>
                                    <Link to={`/edit-product/${currentProduct}`} >Edit Product info</Link>
                                </div>
                            </div>
                            <div className='w-5/12 '>
                                <p className='font-semibold text-lg'>Product Images</p>
                                <p className='font-light text-sm text-gray-500 py-4'>Cover Image</p>
                                <div className='flex w-full justify-center'>
                                    {selectedImages.length != 0 ? (
                                        <img
                                            className="rounded-xl h-48 w-48 md:ml-3 object-contain bg-gray-50"
                                            src={selectedImages[0]}
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
                                    <p className='font-light text-sm text-gray-500 py-4'> {selectedImages.length} of {MAX_FILES_LIMIT} images uploaded </p>
                                </div>

                                <div className='grid grid-cols-4 gap-3 justify-center'>
                                    {selectedImages.map((image, index) => (
                                        <div className='relative justify-center flex w-full'>
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`${index + 1}`}
                                                className="rounded-xl h-20 w-20 object-contain bg-gray-50"
                                            />
                                            <button
                                                onClick={() => handleRemoveImage(index)}
                                                className="absolute top-1 right-3 bg-gray-50 text-red-500 rounded-full "
                                            ><MdOutlineCancel /></button>
                                        </div>

                                    ))}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileInputChange}
                                        multiple
                                        className="hidden"
                                        id="file-input"
                                    />
                                    <label
                                        htmlFor="file-input"
                                        className="bg-gray-50 h-20 w-20 border-dashed border-2 flex justify-center items-center object-contain text-gray-400 px-4 py-2 rounded-md cursor-pointer"
                                    >
                                        <FaPlus />
                                    </label>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProductModal;
