import { Client } from "pg";

export class FavoritePlaceDBQuery {
    private cl: Client

    public constructor(pw: object) {
        this.cl = new Client(pw);
        this.cl.connect();
    }

    /**
     * DB와의 연결을 끊는 메소드
     */
    public async end(): Promise<void> {
        await this.cl.end();
    }

    /**
     * DB 연결 테스트용 
     */
    public async now(): Promise<void> {
        try {
            let result = await this.cl.query(`SELECT now();`);
            console.log(result["rows"]);
        } catch (error) {
            console.error(error);
        } finally {

        }
    }

    public async insertPlace(name: string, province: string, city: string, full_address: string, co_lat: number, co_lon: number, contact: string, category: string, subdivision: string): Promise<void> {
        try {
            await this.cl.query(`INSERT INTO place(name, province, city, full_address, coord_latitude, coord_longitude, contact, category, subdivision, last_update) 
            VALUES ('${name}', '${province}', '${city}', '${full_address}', ${co_lat}, ${co_lon}, '${contact}', '${category}', '${subdivision}', NOW());`);
        } catch (error) {
            console.error(error);
        } finally {

        }
    }

    public async updatePlace(alter: string, condition: string): Promise<void> {
        try {
            await this.cl.query(`UPDATE place SET ${alter}, last_update=NOW() WHERE ${condition}; `);
        } catch (error) {
            console.error(error);
        } finally {

        }
    }

    public async deletePlace(condition: string): Promise<void> {
        try {
            await this.cl.query(`DELETE FROM place WHERE ${condition}`);
        } catch (error) {
            console.error(error);
        } finally {

        }
    }
}