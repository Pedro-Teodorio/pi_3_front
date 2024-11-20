import instace from "./axios";

export const getProducts = async () => {
	try {
		let arrProducts = [];
		const response = await instace.get("api/produtos");
		const data = response.data;
		data.forEach((product) => {
			arrProducts.push({
				id: product.id,
				name: product.nome,
				description: product.desc,
				price: Number(product.preco).toFixed(2),
				image: product.imagens[0].img_url,
				category_id: product.categoriaId,
				stock: product.estoque[0].produto_qtd,
			});
		});
		return arrProducts;
	} catch (error) {
		console.error(error);
	}
};
