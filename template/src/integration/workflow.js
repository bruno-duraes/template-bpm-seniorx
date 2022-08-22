/* eslint-disable */

export default function workflowStart(renderApp) {
    workflowCockpit({
        init,
        onSubmit,
        onError
    });


    async function init(data, info) {
        let dadosDoProcesso = {};
        dadosDoProcesso.variaveisProcesso = await info.getInfoFromProcessVariables();
        dadosDoProcesso.dadosPlataforma = await info.getPlatformData();
        dadosDoProcesso.dadosTarefa = await info.getTaskData();
        dadosDoProcesso.usuario = await info.getUserData();
        dadosDoProcesso.novaSolicitacao = info.isRequestNew();

        renderApp(dadosDoProcesso);
    }

    function onSubmit(data, info) {

    }

    function onError() {
    }
}