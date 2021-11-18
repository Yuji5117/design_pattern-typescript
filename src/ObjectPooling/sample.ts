/**
 * Protを管理するPortManagerは1つで良い
 * Portを実体化できなかった場合は、例外を出す
 */
class PortManager {
    private Ports: [];

    constructor() {
        // ここでPortを実体化する
    }

    getInstanceOfPort = () => {
        // 利用可能なポートが見つかるまでPortの配列の先頭から順に読み込む
        // 見つかった場合 = ステータスフラグを使用中にし、ポートを返す
        // 見つからなかった場合 = スリープさせた後、再度探す
    }

    returnInstanceOfPort = () => {
        // 引き渡されたポートの参照が見つかるまで配列の先頭から順に参照。
        // ステータスフラグを待機中（未使用）にする
        // ポートが見つからない場合は、例外を出す
    }
}

/**
 * Portのクラス
 */
class Port {

}


/**
 * クライアント側の動作
 */
class Client {
    // PortManager
    // PortManagerの対して、ポートを要求
    // portを使用
    // 不必要になったらportを返却
}
