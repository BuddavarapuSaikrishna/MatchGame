import {TabListItems, TabBtn} from './StyledComponents'

const TabItems = props => {
  const {TabDetails, GetTabId, ActiveTabId} = props
  const {displayText, tabId} = TabDetails

  const ClickTabId = () => {
    GetTabId(tabId)
  }

  const ActiveBtn = ActiveTabId ? 1 : 0

  return (
    <TabListItems>
      <TabBtn type="button " onClick={ClickTabId} active={ActiveBtn}>
        {displayText}
      </TabBtn>
    </TabListItems>
  )
}

export default TabItems
