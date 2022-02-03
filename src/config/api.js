const fetchCategoryById = async (id) => {
    const url = `https://service.dened.org/api/categories/${id}`;
    const resp = await fetch(url);
    return await resp.json();
}

export default fetchCategoryById;
