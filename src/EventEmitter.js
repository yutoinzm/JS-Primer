//イベントを発火するためのクラスを作成
export class EventEmitter {
    #listeners = new Map();

    //指定したイベントに対応するSetを作成しリスナー関数を登録
    addEventListener(type, listener) {
        if (!this.#listeners.has(type)) {
            this.#listeners.set(type, new Set());
        }
        const listenerSet = this.#listeners.get(type);
        listenerSet.add(listener);    
    }


    //指定したイベントをディスパッチする
    emit(type) {
        const listenerSet = this.#listeners.get(type);
        if (!listenerSet) {
            return;
        }
        listenerSet.forEach(listener => {
            listener.call(this);
        });
    }

    //指定したイベントのイベントリスナーを解除
    removeEventListener(type, listener) {
        const listenerSet = this.#listeners.get(type);
        if(!listenerSet) {
            return;
        }
        listenerSet.forEach(ownListener => {
            listenerSet.delete(listener);
        });
    }
}