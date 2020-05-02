import { Client } from "pg";

export class FavoritePlaceDBQuery {
    private cl: Client

    public constructor(pw: object) {
        this.cl = new Client(pw);

    }

    /**
     * DB 연결 테스트용 
     */
    public async now(): Promise<void> {
        try {
            this.cl.connect();
            let result = await this.cl.query(`SELECT now();`);
            console.log(result["rows"]);
        } catch (error) {
            console.error(error);
        } finally {
            this.cl.end();
        }
    }

    public async insertPlace(name: string, province: string, city: string, full_address: string, zip_code: number, co_lat: number, co_lon: number, contact: number, category: string, subdivision: string): Promise<void> {
        try {
            this.cl.connect();
            await this.cl.query(`INSERT INTO place(name, province, city, full_address, zip_code, coord_latitude, coord_longitude, contact, category, subdivision, last_update) 
            VALUES ('${name}', '${province}', '${city}', '${full_address}', ${zip_code}, ${co_lat}, ${co_lon}, '${contact}', '${category}', ${subdivision}, NOW());`);
        } catch (error) {
            console.error(error);
        } finally {
            this.cl.end();
        }
    }

    public async updatePlace(alter: string, condition: string): Promise<void> {
        try {
            this.cl.connect();
            await this.cl.query(`UPDATE place SET ${alter}, last_update=NOW() WHERE ${condition}; `);
        } catch (error) {
            console.error(error);
        } finally {
            this.cl.end();
        }
    }

    public async deletePlace(condition: string): Promise<void> {
        try {
            this.cl.connect();
            await this.cl.query(`DELETE FROM place WHERE ${condition}`);
        } catch (error) {
            console.error(error);
        } finally {
            this.cl.end();
        }
    }
}