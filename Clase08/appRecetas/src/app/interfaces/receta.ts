export interface Receta {
  id?: string
  titulo?: string
  tituloIngles?: string
  sumilla?: string
  sumillaIngles?: string
  ingredientes?: any
  ingredientesIngles?: any
  instrucciones?: any
  instruccionesIngles?: any
  cantidadPersonas?: number
  imagenes?: any
  categorias?: any
  fechaPublicacion?: Date
  estado?: boolean
}
