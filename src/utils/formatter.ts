import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export function formatPublishedDate(publishedAt: Date): string {
  return format(publishedAt, "d 'de' LLLL 'às' H:mm'h'", { locale: ptBR })
}

export function formatDateRelativeToNow(publishedAt: Date): string {
  return formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
}
