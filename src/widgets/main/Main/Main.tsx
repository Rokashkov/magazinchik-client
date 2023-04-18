import { observer } from 'mobx-react-lite'
import { IMainProps } from './IMainProps'
import { appStore } from 'shared/model/appStore'
import { MainMobile } from './MainMobile'
import { MainDeckstop } from './MainDeckstop'

export const Main = observer(({ children }: IMainProps) => {
	
	return appStore.isMobile ? <MainMobile>{ children }</MainMobile> : <MainDeckstop>{ children }</MainDeckstop>
})