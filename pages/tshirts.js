import React from 'react';
import Products from "../models/Products"
import mongoose from 'mongoose';
const Tshirts = ({ products }) => {
    {console.log(typeof products)}
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        Object.keys(products).map(product => {
                            {console.log(typeof product)}

                            return <div key={products[product]._id} className="lg:w-1/4 md:w-1/2 p-4 w-full" >
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY: {products[product].category}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{products[product].title}</h2>
                                    <p className="mt-1">$ {products[product].price}</p>
                                    {products[product].size.map(sizes=>{return <span key={products[product].sizes} className="mr-2 border broder-1 px-2">{sizes}</span>})}<br/>
                                    {products[product].color.map(colors=>{return <span key={products[product].colors} className="mr-2">{colors}</span>})}
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </section>
    );

};

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MOGNO_URI)
    }
    let products = await Products.find({ category: "tshirt" })
    let tshirts = {}
    for (let item of products) {
        if (item.title in tshirts) {
            if (!tshirts[item.title].color.includes(item.color) && item.availableQty > 0) {
                tshirts[item.title].color.push(item.color)
            }
            if (!tshirts[item.title].size.includes(item.size) && item.availableQty > 0) {
                tshirts[item.title].size.push(item.size)
            }
        } else {
            tshirts[item.title] = JSON.parse(JSON.stringify(item))
            if (item.availableQty > 0) {
                tshirts[item.title].color = [item.color]
                tshirts[item.title].size = [item.size]
            }
        }
    }
    return {
        props: { products: JSON.parse(JSON.stringify(tshirts)) },
    }
}
export default Tshirts;