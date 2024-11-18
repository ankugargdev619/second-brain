import './App.css'
import { PlusIcon } from './components/icons/PlusIcon'

import { Button } from './components/ui/Button'

function App() {

  return (
    <>
      <Button 
      startIcon={<PlusIcon/>} 
      variant='primary' 
      size='sm' 
      text='Share' 
      onClick={()=>{}} />
      <Button 
      startIcon={<PlusIcon/>} 
      variant='primary' 
      size='md' 
      text='Share' 
      onClick={()=>{}} />
      <Button 
      startIcon={<PlusIcon/>} 
      variant='primary' 
      size='lg' 
      text='Share' 
      onClick={()=>{}} />
    </>
    
  )
}

export default App
