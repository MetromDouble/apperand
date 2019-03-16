import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import DoneIcon from '@material-ui/icons/Done';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';

import { Input } from './Input';
import { Checkbox } from './Checkbox';
import { Button } from './Button';
import { Row } from './Row';
import { IProduct, initialProduct } from './Panel';

interface IProductRowProps {
  product?: IProduct;
  creative?: boolean;
  onUpdate: (product?: IProduct) => void;
}
export const ProductRow = ({ product = initialProduct, creative, onUpdate }: IProductRowProps) => {
  const [name, setName] = useState(product ? product.name : '');
  const handleEdit = () => {
    onUpdate({
      ...product,
      isEditing: true,
    });
  };
  const handleSave = () => {
    onUpdate({
      ...product,
      name: name,
      isEditing: false,
    });
    setName('');
  };
  const handleDelete = () => {
    onUpdate();
  };
  const handleReset = () => {
    if (creative) {
      setName('');
    } else {
      onUpdate({
        ...product,
        isEditing: false,
      });
    }
  };
  const handleChangeName = (event: FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  const handleCheck = (direction: string) => () => {
    if (direction) {
      if (direction === 'in') {
        onUpdate({
          ...product,
          checkedIn: !product.checkedIn,
        });
      }
      if (direction === 'out') {
        onUpdate({
          ...product,
          checkedOut: !product.checkedOut,
        });
      }
    }
  };

  return (
    <Row>
      {!creative && !product.isEditing && (
        <>
          <Checkbox defaultChecked={product.checkedIn} onChange={handleCheck('in')} />
          <Checkbox defaultChecked={product.checkedOut} onChange={handleCheck('out')} />
          <div style={{ width: '100%', lineHeight: '32px' }}>{product.name}</div>
        </>
      )}
      {(product.isEditing || creative) && (
        <Input value={name} placeholder={creative ? 'New product' : 'Rename product'} onChange={handleChangeName} />
      )}
      {creative && (
        <Button onClick={handleSave}>
          <AddIcon fontSize="small" />
        </Button>
      )}
      {product.isEditing && !creative && (
        <Button onClick={handleSave}>
          <DoneIcon fontSize="small" />
        </Button>
      )}
      {(product.isEditing || creative) && (
        <Button onClick={handleReset}>
          <ClearIcon fontSize="small" />
        </Button>
      )}
      {!creative && !product.isEditing && (
        <>
          <Button onClick={handleEdit}>
            <CreateIcon fontSize="small" />
          </Button>
          <Button onClick={handleDelete}>
            <DeleteOutlineIcon fontSize="small" />
          </Button>
        </>
      )}
    </Row>
  );
};
