// TODO: arregla typos de "error", maneja caso de error y exito
export async function getPlants(): Promise<any> { 
    try {
        const response = await fetch("http://192.168.131.101:8080/dca/api/plants");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
