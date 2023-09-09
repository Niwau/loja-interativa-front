import { api } from "../../../services/api";
import { Button } from "../../Button/Button"
import { useNavigate } from 'react-router-dom'

interface ActionButtonsProps {
  deleteURL: string;
  editURL: string;
}

export const ActionButtons = ({ deleteURL, editURL }: ActionButtonsProps) => {

  const navigate = useNavigate()

  const handleDelete = async () => {
    try {
      await api.delete(deleteURL)
      location.reload()
      alert('Deletado!')
    } catch (error) {
      alert('error')
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '16px' }}>
      <Button onClick={() => navigate(editURL)}>
        Editar
      </Button>
      <Button onClick={handleDelete}>
        Remover
      </Button>
    </div>
  )
}