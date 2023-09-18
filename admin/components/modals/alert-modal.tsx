'use client'

import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Modal } from '../ui/modal'

type Props = {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  loading: boolean
}

function AlertModal({ isOpen, onClose, onConfirm, loading }: Props) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <Modal
      title='Are you sure?'
      description='This action cannot be reverted.'
      isOpen={isOpen}
      onClose={onClose}>
      <div className={`pt-6 space-x-2 flex items-center justify-end w-full`}>
        <Button disabled={loading} variant={'outline'} onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} variant={'destructive'} onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  )
}

export default AlertModal
