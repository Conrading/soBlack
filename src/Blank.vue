<template>
    <b-container fluid="sm">
        <b-row  class="mt-5 justify-content-md-center">
            <h7>Welcome to participate</h7>
            <h7>Please offer your opinion and left your individual/firm information</h7>
            <div>
                <b-row align-h="center">
                    <b-col align-self="center" md="2">Lawyer Name</b-col>
                    <b-col md="3"><b-form-input
                v-model="lawyerName"
                placeholder="name or certificate number"/>
                    </b-col>
                </b-row>
                <b-row align-h="center">
                    <b-col align-self="center" md="2">Law Firm</b-col>
                    <b-col md="3"><b-form-input
                v-model="firmName"
                placeholder="If you have"/>
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col>Opinion:   <br>
                    <b-form-textarea
                v-model="opinion"
                rows="3"/>
                    </b-col>
                </b-row>

            </div>
    </b-container>
</template>