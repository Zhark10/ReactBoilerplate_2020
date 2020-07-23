export interface IStateNotifications {
  currentNotification: TCurrentNotification | null
}

export type TCurrentNotification = {
  message: string
  type: TNotificationType
}

export type TNotificationType = 'Success' | 'Error' | 'Info'
