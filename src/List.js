import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'

export default function List({ lists, url, type }) {
  return (
    <ul>
      {lists.map((el, index) => {
        console.log(el)
        return (
          <li key={`${index}`}>
            <LinkContainer to={`${url}/${type}/${el.url}`}>
              <Button variant="link">{el.title}</Button>
            </LinkContainer>
          </li>
        )
      })}
    </ul>
  )
}

export function ListItem({ list, handleCheckbox }) {
  return (
    <div className="row">
      <div className="col-md-12">
        <h4>{list.title}</h4>
        <ul>
          {list.items.map((item, index) => {
            const listItem = handleCheckbox ? <input data-listid={list.id} data-itemid={item.id} type="checkbox" name="finished" checked={item.checked} onChange={handleCheckbox} /> : ''

            return (
              <li key={item.id}>
                <label>
                  {listItem} {item.name}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
