import { CareerProps } from './careers'
import { ContentProps } from './learn'
import { IProjectItem } from './projects'
import { IRoadmap } from './roadmap'
import { IServices } from './services'

export type IBadgeVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'

export interface ICodeBayuData {
  careers: CareerProps[]
  projects: IProjectItem[]
  learns: ContentProps[]
  roadmaps: IRoadmap
  services: IServices[]
}
