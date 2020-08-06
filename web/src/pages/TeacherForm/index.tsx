import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import Select from '../../components/Select'

import './styles.css'
import api from '../../services/api'

function TeacherForm() {
    const history = useHistory()

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsApp] = useState('')
    const [bio, setBio] = useState('')

    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [scheduleItens, setScheduleItens] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleItem() {
        setScheduleItens([
            ...scheduleItens,
            { week_day: 0, from: '', to: '' }
        ])
    }

    function handleCreateClass(event: FormEvent) {
        // Avoid default redirect on submit
        event.preventDefault()

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItens
        })
        .then(() => alert('Cadastro realizado com sucesso!'))
        .catch((error) => alert(error))

        // Redirecting user to landing page
        history.push('/')
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItens = scheduleItens.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem,  [field]: value }
            }

            return scheduleItem
        })
        
        setScheduleItens(updatedScheduleItens)
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas."
            description="O primeiro passo é preenxer esse formulário de inscrição."/>

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input name="name" label="Nome completo" value={name}
                            onChange={(event) => setName(event.target.value)} />

                        <Input name="avatar" label="Avatar" value={avatar}
                            onChange={(event) => setAvatar(event.target.value)} />

                        <Input name="whatsapp" label="WhatsApp" value={whatsapp}
                            onChange={(event) => setWhatsApp(event.target.value)} />

                        <TextArea name="bio" label="Biografia" value={bio}
                            onChange={(event) => setBio(event.target.value)} />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select name="subject" label="Matéria"
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Educação Física', label: 'Educação Física' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'Filosofia', label: 'Filosofia' },
                                { value: 'História', label: 'História' },
                                { value: 'Literatura', label: 'Literatura' },
                                { value: 'Sociologia', label: 'Sociologia' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Inglês', label: 'Inglês' },
                                { value: 'Química', label: 'Química' },
                            ]} />

                        <Input name="cost" label="Custo da sua hora por aula"
                            value={cost} onChange={(event) => setCost(event.target.value)} />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>

                        {
                            scheduleItens.map((scheduleItem, index) => {
                                return (
                                    <div key={scheduleItem.week_day} className="schedule-item">
                                        <Select name="week_day" label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={event => setScheduleItemValue(index, 'week_day', event.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]} 
                                        />

                                        <Input name="from" type="time" label="Das"
                                        value={scheduleItem.from}
                                        onChange={event => setScheduleItemValue(index, 'from', event.target.value)}/>

                                        <Input name="to" type="time" label="Às"
                                        value={scheduleItem.to}
                                        onChange={event => setScheduleItemValue(index, 'to', event.target.value)}/>
                                    </div>
                                )
                            })
                        }
                    </fieldset>

                    <footer>
                        <p>
                            <img src={require('../../assets/images/icons/warning.svg')} alt="Aviso importante"/>
                            Importante <br/>
                            Preencha todos os dados
                        </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>  
            </main>
        </div>
    )
}

export default TeacherForm