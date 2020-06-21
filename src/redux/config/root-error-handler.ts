import { StoreConfig } from "./store"
import { Actions_Errors } from "../modules/errors/Actions"

export const errorHandler = async (e: any) => {
  const error = await StoreConfig.store.dispatch(Actions_Errors.store.setError(e.response.status))
  if (error.payload) {
    const resetErrorByTime = setTimeout(()=>{
      StoreConfig.store.dispatch(Actions_Errors.store.resetError())
    }, 2000)
    return () => clearTimeout(resetErrorByTime)
  }
}