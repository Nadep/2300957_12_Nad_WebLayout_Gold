import React from "react";
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

function MyForm() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '1047px',
                    height: '106px',
                    position: 'static',
                    borderRadius: '8px',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0px 0px 10px 0px #00000026',
                }}
            >
                <Form style={{ display: "flex ", gap: "8px" }} >
                    <FormGroup style={{ width: "208px", height: "36px", padding: "9px 12px", borderRadius: "2px" }}>
                        <Label for="namaMobil">Nama Mobil</Label>
                        <Input
                            id="namaMobil"
                            name="nama"
                            placeholder="Ketik nama/tipe mobil"
                            type="nama"
                        />
                    </FormGroup>
                    <FormGroup style={{ width: "208px", height: "36px", padding: "9px 12px", borderRadius: "2px" }}>
                        <Label for="kategori">Kategori</Label>
                        <Input id="kategori" name="select" type="select" placeholder="Masukan Kapasitas Mobil">
                            <option>2-4 Orang</option>
                            <option>4-6 Orang</option>
                            <option>6-8 Orang</option>
                        </Input>
                    </FormGroup>
                    <FormGroup style={{ width: "208px", height: "36px", padding: "9px 12px", borderRadius: "2px" }}>
                        <Label for="harga">Harga</Label>
                        <Input id="harga" name="select" type="select" placeholder="Masukan Harga Sewa Per Hari">
                            <option>Rp400.000</option>
                            <option>Rp400.000-Rp600.000</option>
                            <option>Rp600.000</option>
                        </Input>
                    </FormGroup>
                    <FormGroup style={{ width: "208px", height: "36px", padding: "9px 12px", borderRadius: "2px" }}>
                        <Label for="status">Status</Label>
                        <Input id="status" name="select" type="select">
                            <option>Disewa</option>
                        </Input>
                    </FormGroup>
                    <div style={{ display: " flex", alignItems: "center" }}>
                        <Button color="success" style={{ width: "92px", height: "36px", marginLeft: "8px" }}>
                            Cari
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default MyForm;