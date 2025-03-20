<script>
    import { getLocalStorage } from '../js/utils.js';

    let date = '03/24/2023'
    let description = 'Required textbooks'
    let category = 'School'
    let amount = '200.00'

    const data = getLocalStorage('expense')
    console.log(data)


</script>

<tr>
    <td>{date}</td>
    <td>{description}</td>
    <td>{category}</td>
    <td>${amount}</td>
</tr>
<tr>
    <td>{date}</td>
    <td>{description}</td>
    <td>{category}</td>
    <td>${amount}</td>
</tr>