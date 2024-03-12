import { AppDataSource } from "./data-source"
import { Artist } from "./entity/Artist"
import { Project } from "./entity/Project"


AppDataSource.initialize().then(async () => {
    console.log('DB initialized')

}).catch(error => console.log(error))
