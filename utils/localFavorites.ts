const toggleFavorite = (id: number) => {
    console.log("Toggle Favorite Llamado");
    let favorites: number[] = JSON.parse(localStorage.getItem("favorites") || '[]');

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeID => pokeID !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites))
}


const existInFavorites = (id: number): boolean => {
    console.log("Existe Favorite");
    const favorites: number[] = JSON.parse(localStorage.getItem("favorites") || '[]');
    if (favorites.includes(id)) {
        return true;
    }
    return false
}

const pokemons = (): number[] => {
    const favorites: number[] = JSON.parse(localStorage.getItem("favorites") || '[]');
    return (favorites);
}

export default {
    toggleFavorite,
    existInFavorites,
    pokemons
}