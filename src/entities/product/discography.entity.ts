import { ChildEntity, Column, ManyToMany, JoinTable } from 'typeorm';
import { Product } from './product.entity';
import { Disk } from './disk/disk.entity';

@ChildEntity()
/** 音乐作品集 */
export class Discography extends Product {

    /** 完全生産限定盤 */
    @Column({length: 32, nullable: true})
    type: string;

    /** UPCP-9021 */
    @Column({length: 32, nullable: true})
    serial: string;

    /** ￥4,259+税 */
    @Column({length: 64, nullable: true})
    guidePrice: string;

    /** CD＋Blu-ray＋ステッカー */
    @Column({length: 128, nullable: true})
    info: string;

    @Column({length: 128, nullable: true})
    profile: string;

    @ManyToMany(type => Disk)
    @JoinTable()
    disks: Disk[];

}
