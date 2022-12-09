

const KEY = `30825357-f9a7ae8e05b75d67f8e10c7e9`;
const baseUrl = `https://pixabay.com/api/`;

export const fetchImages= ( search, page ) => {
    return fetch(
        `${baseUrl}?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
}