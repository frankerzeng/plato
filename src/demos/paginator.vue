<template>
  <div>
    <c-row>
      <c-paginator cls="col"
        :query="{ $offset: 0, $limit: 2 }"
        :count="10"></c-paginator>
    </c-row>
    <c-row>
      <c-paginator cls="col"
        :query="{ $offset: 4, $limit: 2 }"
        :count="10"></c-paginator>
    </c-row>
    <c-row>
      <c-paginator cls="col"
        :query="{ $offset: 8, $limit: 2 }"
        :count="10"></c-paginator>
    </c-row>
    <c-row>
      <c-paginator cls="col"
        :query="{ $offset: 10, $limit: 2 }"
        :count="10"></c-paginator>
    </c-row>
    <c-row>
      <c-paginator cls="col"
        :query="{ $offset: 6, $limit: 2 }"
        :count="20"></c-paginator>
    </c-row>
    <c-row>
      <c-paginator cls="col"
        :query="{ $offset: 16, $limit: 2 }"
        :count="20"></c-paginator>
    </c-row>
    <c-row>
      <c-paginator cls="col"
        :query="{ $offset: 16, $limit: 2 }"
        :count="40"></c-paginator>
    </c-row>
    <c-row>
      <c-paginator cls="col"
        :query="{ $offset: 26, $limit: 2 }"
        :count="40"></c-paginator>
    </c-row>
  </div>
</template>

<script>
import CRow from 'components/c-row'
import CPaginator from 'components/c-paginator'

export default {
  components: {
    CRow,
    CPaginator
  }
}
</script>
