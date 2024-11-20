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

export const getAddresses = async () => {
	try {
		const response = await instace.get("api/endereco", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const addShopCart = async (product_id,quantity) => {
	try{
		const response = await instace.post("api/carrinho/adicionar", {
			PRODUTO_ID: product_id,
			ITEM_QTD: quantity
		}, {
			headers: {
				'Cotent-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem("token")}`
				
			}
		})

		if(response.status !== 200){
			throw new Error("Erro ao adicionar produto ao carrinho")
		}
		const data = response.data;
		console.log("Resposta da API",data);
	}catch(error){
		console.error('Erro ao fazer a requisição:', error);
	}
}