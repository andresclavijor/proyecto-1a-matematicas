module.exports = {
    /**
     * Suma de dos numeros
     * @example
     * n1 = 1 ,n2 = 3 => resultado 4
     * @param {*} n1 Numero uno de la suma
     * @param {*} n2 Numero dos de la suma
     */
    suma: function (n1, n2) {
        return (this.esNumero(n1 , n2) ? n1 + n2:this.mensajeError());
    },
    /**
     * Resta de dos numeros
     * @example
     * n1 = 1 ,n2 = 3 => resultado 2
     * @param {*} n1 Numero uno de la resta
     * @param {*} n2 Numero dos de la resta
     */
    resta: function (n1, n2) {
        return (this.esNumero(n1 , n2) ? n1 - n2:this.mensajeError());
    },
    /**
     * Multiplicación de dos numeros
     * @example
     * n1 = 1 ,n2 = 3 => resultado -2
     * @param {*} n1 Numero uno de la multiplicación
     * @param {*} n2 Numero dos de la multiplicación
     */
    multiplicacion: function (n1, n2) {
        return (this.esNumero(n1 , n2) ? n1 * n2:this.mensajeError());
    },
    /**
     * División de dos numeros
     * @example
     * n1 = 1 ,n2 = 3 => resultado 0.33
     * @param {*} n1 Numero uno de la división
     * @param {*} n2 Numero dos de la división
     */
    division: function (n1, n2) {
        if(this.esNumero(n1 , n2)){
            if(n2 === 0){
                this.mensajeErrorDivision();
            }else{
                return n1/n2;
            }
        }else{
            this.mensajeError()
        }
    },
    /**
     * Mensaje de error que se ejecuta cuando no hay valores numericos
     */
    mensajeError:function (){
        console.log(`algun valor o ambos valores no son numericos`);
    },
    /**
     * Mensaje de error que se ejecuta cuando hay division por 0
     */
    mensajeErrorDivision:function (){
        console.log(`No se puede dividir por 0`);
    },
    /**
     *comprueba los valores numericos
     * @param {*} n1
     * @param {*} n2
     */
    esNumero: function (n1,n2){
        if(typeof n1 !== 'number' || typeof n2 !== 'number'){
            return false
        }
        return true;
    }

}