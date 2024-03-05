import React, { useState, useEffect } from 'react';
import { FaPlus } from "react-icons/fa";
import { MdOutlineCancel, MdDelete } from 'react-icons/md';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { productsData, productCategory, productGender, productBrand } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const EditProductModal = ({ currentProduct }) => {
    const { setDialogVisible, currentColor } = useStateContext();
    const [selectedProductImages, setSelectedProductImages] = useState([]);
    const [selectedDescImages, setSelectedDescImages] = useState([]);
    const [productText, setProductSetText] = useState(productsData[currentProduct].productName);
    const [descText, setDescText] = useState(productsData[currentProduct].productDesc);
    const [category, setCategory] = useState(productsData[currentProduct].productCategory.category);
    const [price, setPrice] = useState(productsData[currentProduct].productPrice);
    const [Sizes, setSizes] = useState(productsData[currentProduct].productSizes.map(item => item.sizeName));
    const [colors, setColors] = useState(productsData[currentProduct].productColors);

    const oldProductImages = productsData[currentProduct].productImages[0].productImages;
    const oldDescImages = productsData[currentProduct].productImages[0].productDetailImages;
    const productCategories = productCategory.map(item => item.category);
    const productBrands = productBrand.map(item => item.brand);

    const maxProductImages = 5;
    const maxDescImages = 6;
    const productNameMaxLength = 30;
    const productDescMaxLength = 100;
    const maxProductSizes = 10;
    const MaxColors = 10;

    const handleProductChange = (e) => {
        if (e.target.value.length <= productNameMaxLength) {
            setProductSetText(e.target.value);
        }
    };
    const handleDescChange = (e) => {
        if (e.target.value.length <= productDescMaxLength) {
            setDescText(e.target.value);
        }
    };
    const handleCategoryChange = (e) => {
        if (e.target.value.length <= productDescMaxLength) {
            setCategory(e.target.value);
        }
    };
    const handlePriceChange = (e) => {
        if (e.target.value.length <= productDescMaxLength) {
            setPrice(e.target.value);
        }
    };
    const handleSizeChange = (event, index) => {
        const newSize = event.target.value;
        const updatedSizes = [...Sizes];
        updatedSizes[index] = newSize;
        setSizes(updatedSizes);
    };
    const handleAddSize = () => {
        if (Sizes.length < maxProductSizes) { // Check if array size is less than 10
            if (Sizes.length === 0 || Sizes[Sizes.length - 1] !== '') {
                let nextSize;
                if (Sizes.length === 0) {
                    nextSize = 8; // If the array is empty, start with 1
                } else {
                    const lastSize = Sizes[Sizes.length - 1];
                    if (lastSize >= 10) {
                        // If the last size has more than one digit, increment only the last digit
                        nextSize = Math.floor(lastSize / 10) * 10 + (lastSize % 10) + 1;
                    } else {
                        // If the last size has one digit, simply increment it by 1
                        nextSize = lastSize + 1;
                    }
                }
                if (!isNaN(nextSize)) {
                    setSizes([...Sizes, nextSize]);
                } else {
                    alert('Please fill in a valid integer for the size field.');
                }
            } else {
                alert('Please fill in the previous size field before adding a new size.');
            }
        } else {
            alert(`Maximum size limit ${maxProductSizes} reached.`);
        }
    };

    const handleAddColor = () => {
        if (colors.length >= MaxColors) {
            alert(`Maximum color limit (${MaxColors}) exceeded.`);
            return;
        }

        const lastColor = colors[colors.length - 1];
        if (lastColor.colorName.trim() === '') {
            alert('Color name cannot be blank.');
            return;
        }

        setColors(prevColors => [...prevColors, { colorName: '', colorCode: '#000000' }]);
    };

    const handleColorChange = (event, index) => {
        const { value } = event.target;
        const newColors = [...colors];
        newColors[index] = { ...newColors[index], colorName: value };
        setColors(newColors);
    };
    const handleColorCodeChange = (event, index) => {
        const { value } = event.target;
        const newColors = [...colors];
        newColors[index] = { ...newColors[index], colorCode: value };
        setColors(newColors);
    };

    const handleMoveUpColor = (index) => {
        if (index === 0) return; // Already at the top, can't move up further
        const newColors = [...colors];
        // Swap current color object with the one above it
        [newColors[index - 1], newColors[index]] = [newColors[index], newColors[index - 1]];
        setColors(newColors);
    };

    const handleMoveDownColor = (index) => {
        if (index === colors.length - 1) return; // Already at the bottom, can't move down further
        const newColors = [...colors];
        // Swap current color object with the one below it
        [newColors[index + 1], newColors[index]] = [newColors[index], newColors[index + 1]];
        setColors(newColors);
    };

    const handleRemoveColor = (index) => {
        const newColors = colors.filter((_, idx) => idx !== index);
        setColors(newColors);
    };

    const handleMoveUpSize = (index) => {
        if (index > 0) {
            const newSizes = [...Sizes];
            const temp = newSizes[index];
            newSizes[index] = newSizes[index - 1];
            newSizes[index - 1] = temp;
            setSizes(newSizes);
        }
    };

    const handleMoveDownSize = (index) => {
        if (index < Sizes.length - 1) {
            const newSizes = [...Sizes];
            const temp = newSizes[index];
            newSizes[index] = newSizes[index + 1];
            newSizes[index + 1] = temp;
            setSizes(newSizes);
        }
    };


    const handleRemoveSize = (index) => {
        const newSizes = [...Sizes];
        newSizes.splice(index, 1);
        setSizes(newSizes);
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

                            {/*-------------First Column-------------*/}

                            <div className=' w-7/12 pr-10'>
                                <p className='font-semibold text-lg py-2'>General Information</p>
                                <p className='font-light text-xs text-gray-400 '>
                                    {`These are the general information of your product. please include real data. please note that all fields are required`}
                                </p>
                                <div className='py-3'>
                                    <div className='flex w-full items-center '>
                                        <p className='w-1/3 text-sm font-semibold'>Product Name</p>
                                        <div className='w-2/3 rounded-md'>
                                            <input
                                                className={`w-full rounded border border-gray-300 focus:border-${currentColor} outline-none transition duration-300`}
                                                type="text"
                                                value={productText}
                                                onChange={handleProductChange}
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
                                    <div className='flex w-full items-center pt-1 '>
                                        <div className='w-1/3 text-sm font-semibold'></div>
                                        <div className='flex w-2/3 justify-between '>
                                            <p className={`pl-3 font-light text-xs ${productText.length >= productNameMaxLength ? 'text-red-500' : 'text-gray-400'}`}>*  Do not Exceed over {productNameMaxLength} characters </p>
                                            <p className='pl-3 font-light text-xs text-gray-400'>{productText.length}/{productNameMaxLength}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-3'>
                                    <div className='flex w-full items-center '>
                                        <p className='w-1/3 text-sm font-semibold'>Short Description</p>
                                        <div className='w-2/3 rounded-md'>
                                            <textarea
                                                className={`w-full rounded border border-gray-300 focus:border-[${currentColor}] outline-none transition duration-300`}
                                                value={descText}
                                                onChange={handleDescChange}
                                                maxLength={productDescMaxLength}
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
                                    <div className='flex w-full items-center '>
                                        <div className='w-1/3 text-sm font-semibold '></div>
                                        <div className='flex w-2/3 justify-between '>
                                            <p className={`pl-3 font-light text-xs ${descText.length >= productDescMaxLength ? 'text-red-500' : 'text-gray-400'}`}>*  Do not Exceed over {productDescMaxLength} characters </p>
                                            <p className='pl-3 font-light text-xs text-gray-400'>{descText.length}/{productDescMaxLength}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-3  '>
                                    <div className='flex w-full items-center '>
                                        <p className='w-1/3 text-sm font-semibold'>Product Code</p>
                                        <div className='w-2/3 rounded-md'>
                                            <input
                                                className={`w-1/2 rounded border border-gray-300 focus:border-[${currentColor}] cursor-not-allowed outline-none transition duration-300`}
                                                type="text"
                                                value={productsData[currentProduct].productId}
                                                disabled={true}
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
                                    <div className='flex w-full items-center pt-1 '>
                                        <div className='w-1/3 text-sm font-semibold'></div>
                                        <p className='pl-3 font-light text-xs text-gray-400'>* Product Code is automatically generated. Cannot change</p>
                                    </div>
                                </div>
                                <div className='py-3  border-b-1 border-dashed '>
                                    <div className='flex w-full items-center '>
                                        <p className='w-1/3 text-sm font-semibold'>Price</p>
                                        <div className='w-2/3 rounded-md'>
                                            <div className='flex w-full items-center'>
                                                <span class='rounded-l border px-4 text-sm bg-gray-100 border-gray-300 py-[8px]'>$</span>
                                                <input
                                                    className={`w-1/2 rounded-r border border-l-0 border-gray-300 focus:border-[${currentColor}] outline-none transition duration-300`}
                                                    type="number"
                                                    step='.01'
                                                    inputmode="decimal"
                                                    value={price}
                                                    onChange={handlePriceChange}
                                                    inputMode=''
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
                                    </div>
                                </div>
                                <div className='flex w-full items-center py-3'>
                                    <p className='w-1/3 text-sm font-semibold'>Category</p>
                                    <div className=' w-2/3 rounded-md'>
                                        <select
                                            value={category}
                                            onChange={handleCategoryChange}
                                            className={`w-full rounded border border-gray-300 focus:border-[${currentColor}] outline-none transition duration-300`}
                                            style={{
                                                paddingTop: '8px',
                                                paddingBottom: '8px',
                                                paddingLeft: '10px',
                                                paddingRight: '5px',
                                                fontSize: '13px',
                                            }}
                                        >
                                            {productCategories.map((category, index) => (
                                                <option
                                                    key={index}
                                                    value={category}
                                                    className="text-gray-800 bg-white hover:bg-gray-200 focus:bg-gray-200"
                                                >
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className='flex w-full items-center py-3'>
                                    <p className='w-1/3 text-sm font-semibold'>Brand</p>
                                    <div className='w-2/3 rounded-md '>
                                        <select
                                            value={category}
                                            onChange={handleCategoryChange}
                                            className={`w-full rounded border border-gray-300 focus:border-[${currentColor}] outline-none transition duration-300`}
                                            style={{
                                                paddingTop: '8px',
                                                paddingBottom: '8px',
                                                paddingLeft: '10px',
                                                paddingRight: '5px',
                                                fontSize: '13px',
                                            }}
                                        >
                                            {productBrands.map((category, index) => (
                                                <option
                                                    key={index}
                                                    value={category}
                                                    className="text-gray-800 bg-white hover:bg-gray-200 focus:bg-gray-200"
                                                >
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className='flex w-full items-center py-3 border-b-1 border-dashed  '>
                                    <p className='w-1/3 text-sm font-semibold'>Gender</p>
                                    <div className=' w-2/3 rounded-md '>
                                        <select
                                            value={category}
                                            onChange={handleCategoryChange}
                                            className={`w-full rounded border border-gray-300 focus:border-[${currentColor}] outline-none transition duration-300`}
                                            style={{
                                                paddingTop: '8px',
                                                paddingBottom: '8px',
                                                paddingLeft: '10px',
                                                paddingRight: '5px',
                                                fontSize: '13px',
                                            }}
                                        >
                                            {productGender.map((category, index) => (
                                                <option
                                                    key={index}
                                                    value={category}
                                                    className="text-gray-800 py-2 bg-white hover:bg-gray-200 focus:bg-gray-200"
                                                >
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className='flex w-full items-start py-3 '>
                                    <p className='w-1/3 text-sm font-semibold'>Sizes</p>
                                    <div className='w-2/3'>
                                        <div className='w-2/3'>
                                            {Sizes.map((size, index) => (
                                                <div
                                                    className='flex items-center pb-2 rounded-md '
                                                    key={index}>
                                                    <input
                                                        className={`w-full rounded-l border border-r-0 border-gray-300 focus:border-${currentColor} outline-none transition duration-300`}
                                                        type="number"
                                                        value={size}
                                                        onChange={(event) => handleSizeChange(event, index)}
                                                        style={{
                                                            paddingTop: '8px',
                                                            paddingBottom: '8px',
                                                            paddingLeft: '10px',
                                                            paddingRight: '5px',
                                                            fontSize: '13px',
                                                        }}
                                                    />
                                                    <span class='rounded-r border px-4 text-sm bg-gray-100 border-gray-300 py-[8px]'>Inches</span>
                                                    <div className='justify-center items-center'>
                                                        <TooltipComponent
                                                            content='Move up'
                                                            position='TopCenter'
                                                        >
                                                            <button
                                                                className='text-gray-600 pl-3'
                                                                onClick={() => handleMoveUpSize(index)}
                                                            ><IoIosArrowUp />
                                                            </button>
                                                        </TooltipComponent>
                                                        <TooltipComponent
                                                            content='Move Down'
                                                            position='TopCenter'
                                                        >
                                                            <button
                                                                className='text-gray-600 pl-3'
                                                                onClick={() => handleMoveDownSize(index)}
                                                            ><IoIosArrowDown />
                                                            </button>
                                                        </TooltipComponent>
                                                    </div>
                                                    <TooltipComponent
                                                        content='Delete'
                                                        position='TopCenter'
                                                    >
                                                        <button
                                                            className='text-gray-600 pl-3 text-lg'
                                                            onClick={() => handleRemoveSize(index)}
                                                        ><MdDelete />
                                                        </button>
                                                    </TooltipComponent>
                                                </div>
                                            ))}
                                            <div className='flex justify-center w-full'>
                                                <button
                                                    className='rounded-lg text-blue-600 underline pt-1 text-sm'
                                                    onClick={handleAddSize}
                                                >
                                                    Add size
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex w-full items-start py-3 '>
                                    <p className='w-1/3 text-sm font-semibold'>Colors</p>
                                    <div className='w-2/3'>
                                        <div className='w-2/3'>
                                            {colors.map((color, index) => (
                                                <div>
                                                    <div
                                                        className='flex items-center pb-2 rounded-md '
                                                        key={index}>

                                                        <div className='pr-2'>
                                                            <input
                                                                className=''
                                                                type="color"
                                                                value={color.colorCode}
                                                                onChange={(event) => handleColorCodeChange(event, index)}
                                                                style={{ 
                                                                    width: '25px', 
                                                                    height: '25px' 
                                                                }}
                                                            />
                                                        </div>
                                                        <input
                                                            className={`w-full rounded border border-gray-300 focus:border-${currentColor} outline-none transition duration-300`}
                                                            type="text"
                                                            value={color.colorName}
                                                            onChange={(event) => handleColorChange(event, index)}
                                                            style={{
                                                                paddingTop: '8px',
                                                                paddingBottom: '8px',
                                                                paddingLeft: '10px',
                                                                paddingRight: '5px',
                                                                fontSize: '13px',
                                                            }}
                                                        />
                                                        <div className='justify-center items-center'>
                                                            <TooltipComponent
                                                                content='Move up'
                                                                position='TopCenter'
                                                            >
                                                                <button
                                                                    className='text-gray-600 pl-3'
                                                                    onClick={() => handleMoveUpColor(index)}
                                                                ><IoIosArrowUp />
                                                                </button>
                                                            </TooltipComponent>
                                                            <TooltipComponent
                                                                content='Move Down'
                                                                position='TopCenter'
                                                            >
                                                                <button
                                                                    className='text-gray-600 pl-3'
                                                                    onClick={() => handleMoveDownColor(index)}
                                                                ><IoIosArrowDown />
                                                                </button>
                                                            </TooltipComponent>
                                                        </div>
                                                        <TooltipComponent
                                                            content='Delete'
                                                            position='TopCenter'
                                                        >
                                                            <button
                                                                className='text-gray-600 pl-3 text-lg'
                                                                onClick={() => handleRemoveColor(index)}
                                                            ><MdDelete />
                                                            </button>
                                                        </TooltipComponent>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className='flex justify-center w-full'>
                                                <button
                                                    className='rounded-lg text-blue-600 underline py-1 text-sm'
                                                    onClick={handleAddColor}
                                                >
                                                    Add Color
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/*-------------Second Column-------------*/}

                            <div className='w-5/12 py-2'>
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
                                    {`You need to add maximum of ${maxDescImages} images. these Images will apper bottom of the product card. add more detailed images for aware the customer of your product`}
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
