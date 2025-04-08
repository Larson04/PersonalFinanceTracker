<script>
    let { entry } = $props()
    
    let date = entry.date
    let description = entry.description
    let category = entry.category
    let amount = entry.amount

</script>

<tr>
    <td>{date}</td>
    <td>{description}</td>
    <td>{category}</td>
    <td>${amount}</td>
</tr>

<style>
    tr{
        padding: 0px 0px 0px 4px;
    }

    td{
        padding: 0px 0px 0px 4px;
    }

</style>